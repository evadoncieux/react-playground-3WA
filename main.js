function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Veuillez vous connecter</h1>;
  }

  function Greeting(props) {
      const [isLoggedIn, setIsLoggedIn] = React.useState(false);

      const handleLogIn = (e) => {
          e.preventDefault();
          setIsLoggedIn(true);
      }

      const handleLogOut = (e) => {
          e.preventDefault();
          setIsLoggedIn(false);
      }

    return(
        <React.Fragment>
            {isLoggedIn ? 
            <React.Fragment>
                <UserGreeting />
                <button onClick={handleLogOut}>Se déconnecter</button>
            </React.Fragment> : 
            <React.Fragment>
                <GuestGreeting />
                <button onClick={handleLogIn}>Se connecter</button>
            </React.Fragment> }
        </React.Fragment>
    )
  }


  function fetchUserInfo() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const user = users[0]
        let name = user.name;
        let email = user.email;
        let company = user.company.name;
        let phone = user.phone;
        let website = user.website;
    
        console.log(user);
        return users;
      })
  }


  function UserCard({users}) {
    const listItems = users.map((user) => (
    <li key={user.id}>
        <h3>{user.name}</h3>
        <ul>{user.email}</ul>
        <ul>{user.company.name}</ul>
        <ul>{user.phone}</ul>
        <ul>{user.website}</ul>
    </li>
  ));

  return <ul>{listItems}</ul>;
  }

  fetchUserInfo().then((users) => {
    ReactDOM.render(
      <UserCard users={users} />,
      document.querySelector('#app')
    );
  });
