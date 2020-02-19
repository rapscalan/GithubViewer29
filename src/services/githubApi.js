export const getUsers = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) {
        throw json;
      }
      return {
        username: json.login,
        name: json.name,
        bio: json.bio,
        company: json.company,
        location: json.location,
        reposNum: json.public_repos,
        img: json.avatar_url,
        url: json.html_url,
        followerCount: json.followers,
        followingCount: json.following,
        repos_url: json.repos_url
      };
    });
};

