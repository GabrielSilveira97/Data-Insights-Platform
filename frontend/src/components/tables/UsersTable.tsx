"use client"
import { useUsers } from "@/hooks/useUsers";
import { UserType } from "@/types/UserType";

const UsersTable = () => {

    const {data, isLoading, error} = useUsers();

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error loading users.</p>}
            {data && (
                <section>
                    <h2>Users List</h2>
                    <ul>
                        {data.map((user : UserType) => {
                            return (
                                <li key={user._id}>
                                    <p>{user.full_name}</p>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            )}
        </div>
    )
}

export default UsersTable;