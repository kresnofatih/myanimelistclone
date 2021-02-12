# MyAnimeList Clone 

Access the deployed [web](https://myanimelistclone.web.app/).

## About the Project

The pandemic has forced the whole world to a long and complete lockdown. 
The long-lasting pandemic has brought millions of new people to fall in love with a certain entertainment called Anime.
This project is a website for the community of Anime lovers to express their love and opinions about Anime. The features of the web is as follows:

### Authentication

The web requires users to sign up for an account to utilize the Anime social web app. By default it will assume you already have an account and will bring you to a login page but you can redirect if you haven't got an account just yet. It will require you to provide a username, email, password, and a url for a profile photo. For the timebeing,
the photo is recommended to be a square because there is no image-squarer feature just yet. Later, you can upload your own profile picture after successfully created an account and logged in. 
Here's an image of the signin and login page:

![Signup Page](https://firebasestorage.googleapis.com/v0/b/myanimelistclone.appspot.com/o/readme%2Fmalc_screencapture_signuppage.PNG?alt=media&token=099d8499-b7e4-4b9e-95cb-88943af46847) 

Here is the signup page view.


![Login Page](https://firebasestorage.googleapis.com/v0/b/myanimelistclone.appspot.com/o/readme%2Fmalc_screencapture_loginpage.PNG?alt=media&token=5aeb23a3-814a-4fb0-91bd-51921139a009)

Here is the login page view.

There is no email verification feature yet so you can come up with one that just doesn't exist. It will only act as an identifier to the account. Only a single account can exist for a single email.

### Feed Page

After logging in, the first page you will see is the feed page. It's a timeline of posts created from all users that exists in the community. What you can do in this web is basically give a score to an anime. The score you gave will automatically create a post that will be seen in the timeline by everyone in the community.

![Feed Page](https://firebasestorage.googleapis.com/v0/b/myanimelistclone.appspot.com/o/readme%2Fmalc_screencapture_feedpage.PNG?alt=media&token=eb1dfb93-5394-4238-909c-1c8cf92a16ff)

Here is a view of the feed page.

The feed page will be filled by posts of peoples' posts that consists of a user's profile picture, username, the score he/she has given to a particular anime, and the basic data of the anime scored.

### Scoring an Anime

Basically you can score any anime from any posts that has a plus sign button. The plus sign button, when pressed will open a popup menu that has a list of score options from 1 to 10 (from worst to best). After pressing/clicking a score, the web should send a POST request to the database server to store the post data. After that, the post should be visible in the Feed post.

![score an anime](https://firebasestorage.googleapis.com/v0/b/myanimelistclone.appspot.com/o/readme%2Fmalc_screencapture_feedscore.PNG?alt=media&token=bca00132-c36b-4af2-b7fc-25da3f1dd39f)

This is how it will look when you press the plus button on the feed page.

**Note: Scoring an anime will post to the feed page and the posts on the feed page cannot be deleted. Scoring the same anime will replace your submitted score to an anime but will create a new post of the same anime to the feed page.**

### Header Menu

To navigate the page or run a certain functionality, you need to open the main menu popup which will appear after clicking the profile picture located inside the page header. On your screen, the profile picture will be located on your top right.

![navigate the page](https://firebasestorage.googleapis.com/v0/b/myanimelistclone.appspot.com/o/readme%2Fmalc_screencapture_navigate.PNG?alt=media&token=32da6e0e-75f4-49f3-a4c7-17d3ccb4187d)

Here is a screenshot of how the menu will appear after clicking the profile picture.

As you can see, you have the option to the following:

#### Navigate to Browse page

This will lead you to an empty page wil a search bar by default. There will be able to type an anime title and obtain results after you press on the search button.

![browse page](https://firebasestorage.googleapis.com/v0/b/myanimelistclone.appspot.com/o/readme%2Fmalc_screencapture_browsepage.PNG?alt=media&token=846f4cb2-11c4-4989-a890-8e3c20c51888) here is a screenshot of how the browse page will appear after typing an anime title and presing the search button. You can also score animes on the browse page.

#### Upload a new profile picture

You can update a profile picture of an image file from your own device by pressing the avatar option. 

![headermenu view](https://firebasestorage.googleapis.com/v0/b/myanimelistclone.appspot.com/o/readme%2Fmalc_screencapture_menu.PNG?alt=media&token=1d0840d4-d0a9-4297-8143-48e01a5b6aef).

#### Log Out

You can finally logout by pressing the logout option on the header menu.