# Reflection

## Design

1. The most helpful part about thinking about design methods in this project was that it helped to ascertain a clear direction in terms of bot implementation. One of the strengths of the design of our code was that each functional aspect of our bot was split into its own method. Each method contained a construction of the URL for the API call and returned a string that contained the properly parsed out values. The avrequest.py file also contained a handy router function that enabled an input string to be directed to the proper function instead of relying on direct external calls to the functions.

2. The most difficult design decision to make was deciding which version of the Slack API to use for our project. The documentation for creating Slack bots included the option to use the first version of the API known as Real Time Messaging (i.e. RTM), or the events API which was the updated version. The documentation outlined the differences and reasons to choose one over the other, but the reasons did not apply specifically to our use case and so the decision was ultimately left up to the team. We ended up going with the events API and had relatively low difficulty getting the code set up to work with the API.

3. In this project we implemented a strategy dessign pattern. This can be seen by the fact that we have a router function that is responsible for routing the different input queries from the user to the proper API function call. This method was particularly useful for this project since it involved a variety of different, but similar, API calls. In future projects, I can see this design pattern working and making my code base cleaner, more concise, and easier to understand.

##Implementation

1. The most helpful part about implementing this slack bot project was the usage of ngrok to test and develop the code. Ngrok is a network tunnelling tool that allows you to expose a port on your machine to the web. The tool generates a URL for you to publically expose your server's endpoints. We used this tool so that our service could integrate with our Slack workspace and let the bot respond to messages in our #financialslackbot channel.

2. The most difficult part about implementing this project was having to navigate the Slack documentation (or lack thereof) for getting a Slack bot up and running from scratch. Most tutorials that we found on the web were outdated by at least 3 years and thus were obsolete. The most difficult part of getting our bot set up was not the coding part, but rather navigating the Slack bot setup UI to get the proper API keys, enable the right settings, and ensure that our workspace was set up for bot installation.

3. For future development projects, it would be useful to pick a technology that is mature and is well documented. We had high hopes for the Slack API since Slack is a new and relatively successful technology company and we expected the developer tools to be accessible and beginner friendly. After finding minimal support though, we understand that a company's overall reputation might not translate directly to quality of documentation.

## Process

1. The most helpful part about using a kanban board in our project was that it was easy to be able to assign tasks to members of our team and to be able to tell what features needed to be done at any given time. Doing code reviews also forced us to read each others code and understand what new features were being introduced at each merge. There were plenty of instances where we commented on each others code reviews and found undesirable code which we were then able to fix and re-push for re-review.

2. The most difficult aspect about our software development process was the lack of regular stand up meetings to update each other on our progress. We were able to manage the lack of 1:1 communication by maintaining healthy levels of communication via text. Since our team only consisted of 3 engineers, we didn't have as difficult of a time making sure we were all on the same page.

3. This project highlighted that pull requests and code reviews are an extremely invaluable part of any software development process. For future projects, I can see myself advocating for code reviews as part of a routine development activity. Using reviews has helped me and my team members better understand our entire project and prevented us from getting pigeonholed into our own pockets of code.

## Overall

Throughout this project, we implemented effective design patterns, implementation techniques, and agile software development processes which allowed us to deliver a working and satisfactory software product. Using a strategy pattern allowed our code to remain concise and uncoupled. This means that future additions to functionality for our bot will involve few or no changes to existing code and new developers will have an existing pattern in the code to work off of making development easier. Using ngrok as a development and testing tool allowed us to publically expose our Python Flask server for our Slack bot to consume and is an invaluable tool that could aid in the development of future backend services. Using kanban is an agile technique that should be used in every software project since it allows for greater visibility in task assignment and burndown. Combining all of these practices allowed our team to become more effective developers and has enabled us to be more efficient when starting new software projects.
