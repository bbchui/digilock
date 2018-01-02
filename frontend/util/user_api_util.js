export const fetchUser = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  })
);

export const updateUser = (user) => {
return(
  $.ajax({
    method: "PATCH",
    url: `api/users/${user.userId}`,
    data: {user}
  })
);
}
