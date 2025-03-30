import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
      // If the response is not ok, throw an error
      throw new Error('Login failed');
    }

    // Parse the JSON response to get the token
    const data = await response.json();
    return data; // Return the token to the caller
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Rethrow the error for further handling if needed
  }
}



export { login };
