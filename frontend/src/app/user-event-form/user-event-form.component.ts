import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Event, EventService} from '../services/event.service';
import {ActivatedRoute} from '@angular/router';
import {Group, GroupService} from '../services/group.service';
import {HttpClient} from '@angular/common/http';
import {User, UserService} from "../services/user.service";
import {State, StateService} from "../services/state.service";

@Component({
  selector: 'app-user-event-form',
  templateUrl: './user-event-form.component.html',
  styleUrls: ['./user-event-form.component.scss']
})
export class UserEventFormComponent implements OnInit {

  userEventFormGroup: FormGroup;
  userOptions: User[];
  eventOptions: Event[];
  stateOptions: State[];

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private userService: UserService,
              private eventService: EventService,
              private stateService: StateService) {
  }

  ngOnInit(): void {
    this.userEventFormGroup = new FormGroup({
      pk: new FormControl(null),
      user: new FormControl(),
      event: new FormControl(),
      state: new FormControl()
    });

    this.userService.getUsers()
      .subscribe((userOptions)=>{
        this.userOptions = userOptions
      })

    this.eventService.getEvents()
      .subscribe((eventOptions)=>{
        this.eventOptions = eventOptions
      })

    this.stateService.getStates()
      .subscribe((stateOptions)=>{
        this.stateOptions = stateOptions
      })

    const pk = this.route.snapshot.paramMap.get('pk');
    if(pk) {
      this.http.get('/api/userEvent/' + pk + '/')
        .subscribe((event) => {
          this.userEventFormGroup.patchValue(event);
        });
    }
  }

  createEventEntry(): void {
    const pk = this.userEventFormGroup.value.pk;
    if (pk) {
      this.http.put('/api/userEvent/' + pk + '/', this.userEventFormGroup.value)
        .subscribe(() => {
          alert('updated successfully!');
        });
    } else {
      this.http.post('/api/userEvent/', this.userEventFormGroup.value)
        .subscribe(() => {
          alert('created successfully!');
        });
    }
  }


}