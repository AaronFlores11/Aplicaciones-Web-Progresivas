var url =
  "https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow";

/* var responseData = fetch(url).then((response) => response.json());

responseData.then(({ items, has_more, quota_max, quota_remaining }) => {
  console.log("Quota Ma " + quota_max);
  for (const {
    title,
    question_id,
    score,
    owner,
    link,
    answer_count,
  } of items) {
    console.log(
      question_id +
        " TITLE " +
        title +
        " . USER ID " +
        owner.user_id +
        ". USER " +
        owner.display_name +
        ". REPUTATION " +
        owner.reputation
    );
  }
}); */

///User id, reputation, Sofware Requiermente Specigicaciton

//Var urlJSON = "https://jsonplaceholder.typicode.com/users";
/* var responseDataJSON = fetch(urlJSON).then((response) => response.json());

responseDataJSON.then((response) => {
  for (const { id, name, username } of response) {
    console.log("ID: " + id + ". NAME: " + name + ". USERNAME: " + username);
  }
});
 */
/* 
fetch(urlJSON, {
  method: "POST",
  headers: {
    "Content-type": "applicaction/json",
  },
  body: JSON.stringify({
    email: "foo@foo.com",
    username: "foo foo",
  }),
})
  .then((response) => response.json())
  .then((response) => console.log(response));
 */

var urlJSON = "https://jsonplaceholder.typicode.com/posts";

fetch(urlJSON)
  .then((response) => response.json())
  .then((response) => {
    for (const { title, id } of response) {
      console.log("ID: " + id + ". TITLE: " + title);
    }
  });
fetch(urlJSON, {
  method: "POST",
  headers: {
    "Content-type": "applicaction/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((response) => console.log(response));
