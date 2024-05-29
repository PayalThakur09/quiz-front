import { Admin } from "./components/Admin";

export default async function admin() {
    return (
        <main className="m-10 space-y-5">
                <div>
                    <Admin />
                    {/* <Link href="/components">
                        <button type="submit" className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer">Cancel</button>
                    </Link> */}
                </div>
        </main>
    )
}
