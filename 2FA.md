---
layout: guide-pages
title: 2FA Guide
provider-link: "/2FA"
images: "/assets/images/guides/2FA/"
sections:   
    - title: "To Enable 2FA"
      href: "#to-enable-2fa"
    - title: "FAQ"
      href: "#faq"
      subsection: 
        - title: "What is 2FA?"
        - href: "#what-is-2fa?"
        - title: "Why set up 2FA now?"
        - href: "#why-set-up-2fa-now?"
overview: "Hack for LA requires two-factor authentication (2FA) in GitHub for all project contributors. Lorem ipsum dolor sit amet consec."
---

## To Enable 2FA
### Visit and follow [Github's Guide to Setting Up 2FA](https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication "Github's Guide to Setting Up 2FA")

If you already have a 2FA application on your mobile phone, you can use that. If you do not already have a 2FA application you will be instructed to download your mobile app of choice (we have had good luck with Authy) and follow the detailed instructions to complete configuration in GitHub.

![image](2FA-Screenshot.png)

## FAQ

### What is 2FA?

Two-factor authentication, or 2FA, is an extra layer of security used when logging into websites or apps. With 2FA, you have to log in with your username and password, and then provide another form of authentication that only you know or have access to.

[Read more information about 2FA at GitHub](https://www.hackforla.org/guide-pages/2FA)




<br>

### Why set up 2FA now?


- We are in the process of establishing best practices on Hack for LA projects and in the HfLA organization’s GitHub account.

- There have been recent news items about hackers attempting to hold open source repositories for ransom. Although these attempts have mostly been unsuccessful, it is still a good reminder that we should use security best practices.


### Encountering challenges using Git CLI after setting up 2FA? (Developers)


You might encounter a challenge using the Git CLI after enabling 2-Factor Authentication if you have not used the ssh link for the repo URL.


If you clone via the ssh URL for a repo, e.g.

`git@github.com:hackforla/governance.git`

instead of the `https` URL, e.g.

`https://github.com/hackforla/governance.git`

then you probably won't run into any issues after enabling 2FA, as you already use an SSH key.


Read more about [connecting to GitHub with SSH.](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

Also, these steps might help you get the CLI auth working again:

1. Try pushing code from the CLI, if you get rejected unexpectedly it’s 2FA (if you enabled it)

2. [Clear your cached GH credentials](https://devconnected.com/how-to-clear-git-cache/#:~:text=The%20easiest%20way%20to%20clear,remove%20an%20entire%20working%20directory.)

3. [Create a token at GH.com, which you’ll use as your CLI password](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)


If you are still having issues using 2FA with your CLI, please reach out to the [#ops](https://app.slack.com/client/T04502KQX/CV7QGL66B) channel on the Hack for LA Slack.


