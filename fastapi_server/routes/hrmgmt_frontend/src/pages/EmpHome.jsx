
function EmpHome() {

    let user = JSON.parse(
        localStorage.getItem("user") || "null"
    );

    return (
        <div>
            <h1>Employee Home Page</h1>

            {user ? (
                <>
                    <h3>Welcome {user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </>
            ) : (
                <p>Please login first</p>
            )}
        </div>
    );
}

export default EmpHome;
