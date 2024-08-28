import Link from 'next/link';

const CartButton = () => {
  return (
    <div className="flex items-center">
      <Link href="/CartPage" legacyBehavior>
        <a className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L4 6H1m4 0h16m-4 9a4 4 0 11-8 0h8z"
            />
          </svg>
          Cart
          <span className="ml-2 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs">
            3
          </span>
        </a>
      </Link>
    </div>
  );
};

export default CartButton;
