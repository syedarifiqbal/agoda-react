import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Home</h2>
            <NavLink to={'/products'}>Go to Product Listing</NavLink>
        </main>
    );
}
