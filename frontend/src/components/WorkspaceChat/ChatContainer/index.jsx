import sanitizeHtml from 'sanitize-html';

//...

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!message || message === "") return false;

  const sanitizedMessage = sanitizeHtml(message);
  const prevChatHistory = [
    ...chatHistory,
    { content: sanitizedMessage, role: "user" },
    {
      content: "",
      role: "assistant",
      pending: true,
      userMessage: sanitizedMessage,
      animate: true,
    },
  ];

  setChatHistory(prevChatHistory);
  setMessage("");
  setLoadingResponse(true);
};

const sendCommand = async (command, submit = false) => {
  if (!command || command === "") return false;
  if (!submit) {
    setMessage(command);
    return;
  }

  const sanitizedCommand = sanitizeHtml(command);
  const prevChatHistory = [
    ...chatHistory,
    { content: sanitizedCommand, role: "user" },
    {
      content: "",
      role: "assistant",
      pending: true,
      userMessage: sanitizedCommand,
      animate: true,
    },
  ];

  setChatHistory(prevChatHistory);
  setMessage("");
  setLoadingResponse(true);
};
        content: "",
        role: "assistant",
        pending: true,
        userMessage: command,
        animate: true,
      },
    ];

    setChatHistory(prevChatHistory);
    setMessage("");
    setLoadingResponse(true);
  };

  useEffect(() => {
    async function fetchReply() {
      const promptMessage =
        chatHistory.length > 0 ? chatHistory[chatHistory.length - 1] : null;
      const remHistory = chatHistory.length > 0 ? chatHistory.slice(0, -1) : [];
      var _chatHistory = [...remHistory];

      if (!promptMessage || !promptMessage?.userMessage) {
        setLoadingResponse(false);
        return false;
      }

      if (!!threadSlug) {
        await Workspace.threads.streamChat(
          { workspaceSlug: workspace.slug, threadSlug },
          promptMessage.userMessage,
          (chatResult) =>
            handleChat(
              chatResult,
              setLoadingResponse,
              setChatHistory,
              remHistory,
              _chatHistory
            )
        );
      } else {
        await Workspace.streamChat(
          workspace,
          promptMessage.userMessage,
          (chatResult) =>
            handleChat(
              chatResult,
              setLoadingResponse,
              setChatHistory,
              remHistory,
              _chatHistory
            )
        );
      }
      return;
    }
    loadingResponse === true && fetchReply();
  }, [loadingResponse, chatHistory, workspace]);

  return (
    <div
      style={{ height: isMobile ? "100%" : "calc(100% - 32px)" }}
      className="transition-all duration-500 relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[26px] bg-main-gradient w-full h-full overflow-y-scroll border-4 border-accent"
    >
      {isMobile && <SidebarMobileHeader />}
      <div className="flex flex-col h-full w-full md:mt-0 mt-[40px]">
        <ChatHistory
          history={chatHistory}
          workspace={workspace}
          sendCommand={sendCommand}
        />
        <PromptInput
          workspace={workspace}
          message={message}
          submit={handleSubmit}
          onChange={handleMessageChange}
          inputDisabled={loadingResponse}
          buttonDisabled={loadingResponse}
          sendCommand={sendCommand}
        />
      </div>
    </div>
  );
}
