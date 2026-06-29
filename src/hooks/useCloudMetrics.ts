import { useQuery } from "@tanstack/react-query";

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

async function fetchProducts(): Promise<ProductsResponse> {
  const response = await fetch("https://dummyjson.com/products?limit=6");

  if (!response.ok) {
    throw new Error("Unable to fetch cloud metrics");
  }

  return response.json();
}

function mapProductsToCloudData(products: Product[]): CloudDashboardData {
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  const averageRating =
    products.reduce((sum, product) => sum + product.rating, 0) / products.length;

  const labels = ["CPU", "GPU", "RAM", "PV", "Network", "Cloud"];

  const metrics = products.map((product, index) => ({
    id: product.id,
    label: labels[index] ?? product.title,
    value: Math.min(95, Math.round(product.discountPercentage * 4)),
    unit: "%",
    description: `${product.title} optimization signal`,
  }));

  return {
    metrics,
    providers: [
      { id: "aws", name: "AWS", status: "Connected", resources: 42 },
      { id: "azure", name: "Azure", status: "Connected", resources: 31 },
      { id: "gcp", name: "Google Cloud", status: "Syncing", resources: 26 },
      { id: "onprem", name: "On-Premise", status: "Connected", resources: 18 },
    ],
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