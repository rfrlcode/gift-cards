import ProductCard from "@/components/ui/ProductCard";
import { Deal } from "@/types";

interface ProductListProps {
  items: Deal[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="">
      {/* Flex container with wrap and gap for spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex-1">
            {/* Ensure the ProductCard can shrink and grow as needed, but has a reasonable default size */}
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
