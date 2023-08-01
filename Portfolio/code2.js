function playEye(){
    console.log("playEye started...");
    mySound=new sound("Eye.mp3");
    mySound.play();

}

function sound(srcFile){
    this.sound=document.createElement("audio");
    this.sound.src=srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    this.play=function(){
        this.sound.play();

    }

    this.stop=function(){
        this.sound.pause();

    }
}