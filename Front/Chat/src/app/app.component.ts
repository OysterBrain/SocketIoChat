import { Component, OnInit } from '@angular/core';
import { ChatService } from './Service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  message : String = '';
  messages: string[] = [];
  constructor(private chatService: ChatService){
    
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
      this.chatService.getMessages().subscribe(msg => {
        console.log('got a msg: ' + msg);
        this.messages.push(msg);
      });
  }
}
