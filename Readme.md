## Userstyles Riedler

Here are all of my personal userstyles. Most of those sites are used by me regularly, so high quality and fast updates are mostly guaranteed.

### Priority List

The high priority ones are

- Darklearning (moodle)
- Eutropia (dolphin-emu.org)
- DarkArch (archlinux.org except for wiki)
- JavaDarks (Javadocs, but just the reference sheets)

Those will always be maintained with a really high standard because I'm using the sites all the time and they're not too complicated.

Then, there are the mid-priority ones:

- Dark Grimm (grimmstories.com)

I don't use that website anymore, so issues have to be reported by the user.

Then, the broken or abandoned styles:

- Black Tea (Gitea; I don't use it anymore and it isn't finished)
- Darkowa (Outlook web-app; The website is really complicated, so this style is very much shit. It'll slowly get better though.)

### How to install

You'll need a browser extension that supports userstyles, the one I use (and the one the style is written and tested with) is Stylus. Download it here for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) or [Opera](https://addons.opera.com/en/extensions/details/stylus/)

Then you can add the style to Stylus by opening the raw .user.css file of the style. The master branch contains the stable versions, and the development versions are in the style's respective branches.
Most styles have many customisation settings, so you can customize the style without even looking into the code too!

### How to contribute

If you want to submit a completely new style, we first need to have a chat. Please contact me per mail at [dev@riedler.wien](mailto:dev@riedler.wien). After _some_ amount of time, I'll answer with some better chatting services lol.

If you want to add something to an existing style, you can just open a pull request. Don't worry, I won't bite.

I also consider opening an issue about something that broke contributing. If you do that, I'll thank you with a mention in the release :)

### Release Cycle

We use base.major.minor versions here.
- The base will only be modified with the first stable release (from 0.x.x to 1.0.0) or after a full rewrite.
- The major version is only to be changed when a *major* change or several minor change has happened.
- The minor version can be changed everytime a new set of patches were added. It should be noticable changes, e.g. just a changed color isn't enough for a new minor version.
  Exceptions are to be made when a style becomes stale, then the last patches should be added to a new minor version and merged to master.

Only base and major versions should be marked as releases in github, minor versions are only to be marked with tags. It's already cluttered enough with that rule in place.
Every release should also contain a changelog that lists all the changes since the last major version.
