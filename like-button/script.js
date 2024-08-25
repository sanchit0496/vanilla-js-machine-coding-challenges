const submitBtn = document.getElementById("submit-btn");

const postSent = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  submitBtn.textContent = "Loading";

  postSent()
    .then((result) => {
      console.log(result);
      if (result.status === 200 || result.status === 201) {
        submitBtn.textContent = "Liked";
      } else {
        submitBtn.textContent = "Error";
      }
    })
    .catch((err) => {
      console.log(err);
      submitBtn.textContent = "Error";
    });
});
