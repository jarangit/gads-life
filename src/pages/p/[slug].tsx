import Head from "next/head";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { fetchProductBySlug, fetchProducts } from "@/lib/api";
import { buildSeoMeta, type SeoEntityInput } from "@/lib/seo";

interface ProductPageProps {
  product: SeoEntityInput;
}

export default function ProductDetailPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const seo = buildSeoMeta(props.product, { type: "product" });

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
        <h1 className="text-2xl font-semibold">{props.product.name}</h1>
        {props.product.subtitle && (
          <p className="mt-2 text-slate-600">{props.product.subtitle}</p>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const slug = String(params?.slug || "");

  if (!slug) {
    return { notFound: true };
  }

  try {
    const product = await fetchProductBySlug(slug);

    if (!product) {
      return { notFound: true };
    }

    return {
      props: {
        product: {
          name: product.name,
          slug: product.slug,
          excerpt: product.quickVerdict?.description || null,
          subtitle: product.subtitle,
          image: product.image,
          heroImage: product.image,
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
    const response = await fetchProducts({ page: 1, limit: 100 });

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
