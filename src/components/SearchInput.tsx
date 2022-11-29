import { useContext } from "react"
import { TodoContext } from "../context"

export const SearchInput = () => {
    const { setSearch, search } = useContext(TodoContext)
    return <>
        <label>Search</label>
        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" />
    </>
}