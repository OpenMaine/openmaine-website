# openmaine-website
This is the source of the website for openmaine.org. It's based on a bootstrap theme, but currently just HTML, CSS, and JavaScript. NOTE: These files correspond to the live site. Don't edit the main branch. Instead, make a new branch, make your changes, and issue a pull request.


Just putting this here, so peeps can find it... **Slack invite link**: https://join.slack.com/t/openmaine/shared_invite/zt-57d28mv4-j~WPnaNxVq43GDX~3Te4Hg
(it expires from time to time; this one is current as of 3/14/20.


# Whoa, how do I make a local ('my own') copy of these files?

First, just look at the green "Clone or download" button on the upper
left. You can "Download ZIP" to get your own copy this way. Open the .zip file
and navigate to the index.html file... this should open 'the website' (but
not on the web) in your browser.

If you will be contributing, see some info here:
https://help.github.com/en/articles/cloning-a-repository
(but, alas, there is much more to learn)

Nutshell process to contribute code, w/o branching, on the command line:
1. Clone repo, as described in the link above
  you now have a local copy, in a new directory called
	"Campaign-Finance" 
2. cd into that directory
3. edit
4. (check your work!)
5. here's how to push it back up:
```
git add .
git commit -m 'message about what I did'
git push
```

The first line adds all your changes, to a staging area.
The second line 'commits' those; make sure you include a meaningful message.
The last line actually makes the changes on GitHub.

I don't ever use the desktop client, so can't help you there.

Also, there is tons to learn about branching, which is the better way to
work.
