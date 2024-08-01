// Dangerous: Directly injecting user input into the DOM without sanitization
function UserProfile({ userInput }) {
  return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
}
