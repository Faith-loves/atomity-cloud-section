import { useQuery } from "@tanstack/react-query";

const CLOUD_METRICS_ENDPOINT = "https://dummyjson.com/products?limit=6";

type Product = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
};

type ProductsResponse = {
  products: Product[];
};

export type CloudMetric = {
  id: number;
  label: string;
  value: number;
  unit: string;
  description: string;
};

export type CloudProvider = {
  id: string;
  name: string;
  status: "Connected" | "Syncing";
  resources: number;
};

export type CloudDashboardData = {
  metrics: CloudMetric[];
  providers: CloudProvider[];
  savings: number;
  efficiency: number;
  activeResources: number;
};

const cloudSignalLabels = [
  "CPU",
  "GPU",
  "RAM",
  "PV",
  "Network",
  "Cloud",
] as const;

const cloudProviders: CloudProvider[] = [
  { id: "aws", name: "AWS", status: "Connected", resources: 42 },
  { id: "azure", name: "Azure", status: "Connected", resources: 31 },
  { id: "gcp", name: "Google Cloud", status: "Syncing", resources: 26 },
  { id: "onprem", name: "On-Premise", status: "Connected", resources: 18 },
];

async function fetchProducts(): Promise<ProductsResponse> {
  const response = await fetch(CLOUD_METRICS_ENDPOINT);

  if (!response.ok) {
    throw new Error("Unable to fetch optimization signals");
  }

  return response.json();
}

function mapProductsToCloudData(products: Product[]): CloudDashboardData {
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  const averageRating =
    products.reduce((sum, product) => sum + product.rating, 0) / products.length;

  const metrics = products.map((product, index) => {
    const label = cloudSignalLabels[index] ?? product.title;
    const optimizationValue = Math.min(
      95,
      Math.round(product.discountPercentage * 4),
    );

    return {
      id: product.id,
      label,
      value: optimizationValue,
      unit: "%",
      description: `${product.title} mapped into a ${label} optimization signal`,
    };
  });

  return {
    metrics,
    providers: cloudProviders,
    savings: Math.round(totalPrice * 12),
    efficiency: Math.min(99, Math.round(averageRating * 20)),
    activeResources: totalStock,
  };
}

export function useCloudMetrics() {
  return useQuery({
    queryKey: ["cloud-metrics"],
    queryFn: async () => {
      const data = await fetchProducts();
      return mapProductsToCloudData(data.products);
    },
  });
}