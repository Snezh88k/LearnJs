let names = ["no.such.users", "iliakan", "remy"];

async function getUsers(names) {
  const result = await Promise.all(
    names.map((name) => {
      return fetch(`https://api.github.com/users/${name}`, {
        headers: {
          Authorization: "Bearer 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",
        },
      }).then((response) => response.json());
    })
  );

  const users = result.filter((v) => v.login);

  return users;
}

(async () => {
  console.log(await getUsers(names));
})();
