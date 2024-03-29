import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

/**
 * Creates a new post.
 * @param {string} postData - input information.
 */

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  postData.tags = postData.tags.split(",");

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
