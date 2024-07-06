# These are UserSotylike Notes plus non functional requirements.
> the document helps UI prototype and SRS clarification


As a GUEST 

1. View all reported bugs(tickets of type Bug)
2. View details on reported bug(T.)
3. Login (it is not covered by the mvc because it's implemented with cookies)
4. Register as a REGULAR USER(this functionality is covered by the mvc, 
but I am implementing it regardless);


As a REGULAR USER

1. 
2.  
5. Report *Bug* (Bug Ticket Raising) ( a/. , Also it would be challenge to transfer the current "bug state")
6. Become an Admin(apply for admin)
7. Logout
10. Raise ticket for new *Category* ( a/. - this MUST be integrated in the mvc, it will generate a auth. problem!!! )
16. Raise a ticket for new *Unit* ( a/. )
17. Raise a ticket for new *Currency*  ( a/. )
12. View my bugs
15. Manage my profile - picture, email, username, 
25. Add to his/her own *Watched* collection.

As a REGULAR ADMIN

1. 
2. 
5. 
7. 
8. Change Bug Status
10. 
11. Open Ticket (if it is in his/her ability to solve it opens it, otherwise - closes it again)
16. 
17. 
12. 
13. Solve Ticket (so far a ticket is of four different types - *Bug*, *Category*, *Unit*, *Currency* - the latest ones can be solved just by creating
the required (if possible), or described as not solvable. The first one must be estimated and, if decided, set in the backlog of the issue tracking system of the considered app).
15. 
18. Can't change ticket already opened 
23. So the appropriate functionality is appearing if the corresponding ticket is raised.

As a SUPER ADMIN

1. 
2. 
5. 
8. 
9. See list of all admins
10. 
11. 
12.  
13. 
14. Adding User to Admin role
15. 
16. 
17. 

19. Inviting user to admin role
20. Rejecting user applications for admin role 
21. Removing admin from admin role
24. Adding / Removing Ticket Type

****
### Little non functional requirements

- Mobile first UI approach might be good idea for basic admin work.

- Simple UI but handy and fast.

- Search, category, pagination? A kind of filtering.
- Order by time tracking.

- Classifications by importance. This classification will be provided by
combining "number of users with the same problem" and the admin estimation of the problem. The *Bug* tickets must have both, while other types are going to have only users count.

- Time tracking between raising, opening and solving


****
## SIMPLE USER STORIES TO HELP WITH THE DIFFERENT VIEW POINTS

### As a guest 

### As all below

- When creating ticket it is good to search for similar tickets to prevent repetition from the beginning. If similar exists, a "I have same problem" button must be provided.

### As a regular user

- When I spot a bug or suggest an idea, I want all the state and view from where I started the ticket to be at my disposal at the moment
  of the ticket creation, so I can pick whatever I need to create the ticket.
- When I create a ticket it is good to have some colored pen and arrow tools to draw over the state(the state picture) and some formatting tools, so I can describe the ticket in fast and disambiguous way.
- When the ticket is created, I want to track if it is viewed, opened, solved or if there's some feedback from the person assigned to my ticket.



### As a regular admin

- I expect good mobile version, as the job is usually part time and done on the fly

### As a super admin
