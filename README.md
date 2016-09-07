## Run the website

You need a Webservier to run this demo.
For example you can use [adsf](https://github.com/ddfreyne/adsf).

```bash
$ gem install adsf
$ cd </path/to/project-directory/>
$ adsf
```

## Add a new video

Videos should be stored in the directory `media/`.
If you want the new video to be displayed on the website append the following html snipped to the `div`-container `.intro`.

```html
<div class="story">
  <div class="video">
    <video type="video/mp4" src="./media/<title-of-the-video>.mp4"></video>
  </div>
  <div class="video-overlay">
    <div class="mission-statement">
      <h1>[YOUR TITLE]</h1>
      <h3>[YOUR MESSAGE]</h3>
    </div>
  </div>
</div>
```