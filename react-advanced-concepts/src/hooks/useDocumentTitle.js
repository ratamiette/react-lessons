import { useEffect } from "react";

export default function useDocumentTitle(title) {
  // common logic can be extracted to our custom hooks and shared across different components.
  useEffect(() => {
    // the code that would be into the componentDidMount and componentDidUpdate lifecycle methods
    console.log("useEffect callback");

    document.title = title;

    return () => {
      // the code that would be into the componentWillUnmount lifecycle method
      console.log("Clean Up");
    };
  });
}
