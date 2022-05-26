import { useState, useEffect } from "react";
import Comments from "./Comments";
import Users from "./Users";
import Posts from "./Posts";

function App() {
	const API_USERS = "https://jsonplaceholder.typicode.com/users";
	const API_POSTS = "https://jsonplaceholder.typicode.com/posts";
	const API_COMMENTS = "https://jsonplaceholder.typicode.com/comments";
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);
	const [comments, setComments] = useState([]);
	const [fetchError, setFetchError] = useState(null);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await fetch(API_USERS);
			if (!response.ok) throw Error("Did not receive except data");
			const listUsers = await response.json();
			console.log(listUsers);
			setUsers(listUsers);
			setFetchError(null);
		} catch (err) {
			setFetchError(err.message);
		}
	};

	return (
		<main>
			<div className="App">
				<button onClick={fetchUsers}> users</button>
				<button> post</button>
				<button> comments</button>
			</div>
			<Comments />
			<Posts />
			<Users users={users} fetchUsers={fetchUsers} />
		</main>
	);
}

export default App;
