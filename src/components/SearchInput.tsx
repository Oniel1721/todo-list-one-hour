import { useContext } from "react"
import { TodoContext } from "../context"

export const SearchInput = () => {
    const { setSearch, search } = useContext(TodoContext)

    return <header className="header">
        <section className="search-bar">
            <div className="search-input-container">
                <input
                    className="search-input"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Search"
                    type="text"
                />
            </div>
            <i className="search-bar-icon" />
        </section>
    </header>
}