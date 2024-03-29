import { createPost } from "../api/posts/create.mjs";

/**
 * Listener for create post.
 */

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      // Send to the API
      createPost(post);
    });
  }
}
