import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { Observable, of } from 'rxjs';

describe('UsersService', () => {
  let usersService: UsersService;
  let response;
  // Declare a userResponse variable set to a mocked response of our service method.
  const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          pokemon: 'Blastoise'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          pokemon: 'Charizard'
        }
      ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });

    usersService = TestBed.get(UsersService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  // test for the expectation that allUsers will return a collection of users.
  it('should return a collection of users', () => {
      // Then we use the spyOn() method to spy on usersService.all
      // and chain .returnValue() to return our mocked userResponse variable
      // wrapping it with of() to return this value as an observable.
      spyOn(usersService, 'allUsers').and.returnValue(of(userResponse));

      // With our spy set, we call our service method as we would within a component,
      // subscribe to the observable, and set its return value to response.
      usersService.allUsers().subscribe(res => {
        response = res;
      });

      // Finally, we add our expectation that response will be set to the return value of the service call, userResponse.
      expect(response).toEqual(userResponse);
    });
});



