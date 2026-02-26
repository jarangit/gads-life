import Head from "next/head";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { fetchContentArticles } from "@/lib/api";
import { buildSeoMeta, type SeoEntityInput } from "@/lib/seo";

interface ReviewPageProps {
  article: SeoEntityInput;
}

export default function ReviewArticlePage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const seo = buildSeoMeta(props.article, { type: "review" });

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />

        <meta property="og:type" content={seo.ogType} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:url" content={seo.ogUrl} />
        <meta property="og:image" content={seo.ogImage} />
        <meta property="og:image:width" content={seo.ogImageWidth} />
        <meta property="og:image:height" content={seo.ogImageHeight} />

        <meta name="twitter:card" content={seo.twitterCard} />
        <meta name="twitter:title" content={seo.twitterTitle} />
        <meta name="twitter:description" content={seo.twitterDescription} />
        <meta name="twitter:image" content={seo.twitterImage} />
      </Head>

      <main className="mx-auto max-w-3xl py-8">
        <h1 className="text-2xl font-semibold">{props.article.title || props.article.name}</h1>
        {props.article.summary && (
          <p className="mt-2 text-slate-600">{props.article.summary}</p>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<ReviewPageProps> = async ({ params }) => {
  const slug = String(params?.slug || "");

  if (!slug) {
    return { notFound: true };
  }

  try {
    const response = await fetchContentArticles({ page: 1, limit: 200 });
    const article = response.items.find((item) => item.slug === slug);

    if (!article) {
      return { notFound: true };
    }

    return {
      props: {
        article: {
          title: article.title,
          slug: article.slug,
          excerpt: article.excerpt,
          summary: article.summary,
          description: article.metaDescription,
          image: article.heroImage,
          ogImage: article.heroImage,
          heroImage: article.heroImage,
        },
      },
      revalidate: 300,
    };
  } catch {
    return { notFound: true, revalidate: 60 };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetchContentArticles({ page: 1, limit: 200 });

    return {
      paths: response.items
        .filter((item) => Boolean(item.slug))
        .map((item) => ({ params: { slug: item.slug } })),
      fallback: "blocking",
    };
  } catch {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};
