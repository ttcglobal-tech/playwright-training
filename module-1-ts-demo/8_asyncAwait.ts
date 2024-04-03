// Simulated asynchronous function to fetch user data from an API​

const fetchUserData = (): Promise<{ id: number; name: string }> => {
  return new Promise((resolve) => {
    // Simulate API call with setTimeout​

    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 3000); // Simulating a 2-second delay​
  });
};

// Function to demonstrate non-blocking execution​

const demonstrateNonBlockingExecution = async (): Promise<void> => {
  console.log("Start fetching user data");
  // Initiate asynchronous operation (API call) to fetch user data​

  const userDataPromise = fetchUserData();
  // While waiting for the API call to complete, perform other tasks​

  console.log("User data1:", userDataPromise);

  for (let i = 0; i < 5; i++) {
    console.log(`Processing task ${i}`);
    await new Promise((resolve) => setTimeout(resolve, 400)); // Simulate other tasks taking 0.5 seconds each​
  }
  // Once the API call completes, retrieve and log the user data​
  console.log("User data2:", userDataPromise);
  const userData = await userDataPromise;
  console.log("User data3:", userData);
  console.log("End");
};

// Call the function to demonstrate non-blocking execution​

demonstrateNonBlockingExecution();