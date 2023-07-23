export class ClickCountService{
    clickCountObject = {
        clickCount: 0
    }

    increaseClickCount(){
        this.clickCountObject.clickCount=this.clickCountObject.clickCount +1
    }
}