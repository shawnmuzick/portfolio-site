#include <stdio.h>
#include <stdlib.h>

/** a data structure representing a node **/
struct node {
  int data;
  struct node* next;
};

/** function to create a new node and return a pointer to it**/
struct node* new_Node(int data) {
  struct node* newP = malloc(sizeof(struct node));
  newP->data = data;
  newP->next = NULL;
  return newP;
}

/** function to print out a list given the head pointer**/
void list_print(struct node* head) {
  printf("Begin List Print:\n");
  struct node* tmp = malloc(sizeof(struct node));
  tmp = head;

  while (tmp != NULL) {
    printf("%d\n", tmp->data);
    tmp = tmp->next;
  }
  printf("End List Print\n\n");
}

/** function to add a new node to the end of a list, given the head pointer**/
void list_add_atEnd(struct node* head, int data) {
  // if the list is empty, add the data and get out
  if (head == NULL) {
    head = new_Node(data);
    return;
  } else {
    struct node* newP = new_Node(data);

    struct node* tmp = malloc(sizeof(struct node));
    tmp = head;

    while (tmp->next != NULL) {
      tmp = tmp->next;
    }
    tmp->next = newP;
  }
  return;
}

/** function to add a new node to this list in ascending order**/
void list_add_inAscendingOrder(struct node* head, int data) {
  struct node* tmp = malloc(sizeof(struct node));
  tmp = head;

  // walk the list until we find one greater
  while (tmp->data < data)
    tmp = tmp->next;

  struct node* newP = new_Node(tmp->data);
  tmp->data = data;
  newP->next = tmp->next;
  tmp->next = newP;

  return;
}

/** function to add a new node at a specific position**/
void list_add_atPosition(struct node* head, int data, int position) {
  struct node* tmp = malloc(sizeof(struct node));
  tmp = head;

  while (position - 1 > 0 && tmp != NULL) {
    tmp = tmp->next;
    position--;
  }
  struct node* newP = new_Node(data);
  newP->next = tmp->next;
  tmp->next = newP;
  return;
}

/** function to delete the last node **/
void list_delete_one_atEnd(struct node* head) {
  struct node* tmp = head;

  while (tmp->next->next != NULL)
    tmp = tmp->next;  // walk to the end

  free(tmp->next);
  tmp->next = NULL;
  return;
}

/** function to delete the node at a specific position**/
void list_delete_one_atPosition(struct node* head, int position) {
  struct node** tmp = &head;

  while (position > 0) {
    tmp = &(*tmp)->next;
    position--;
  }

  *tmp = (*tmp)->next;
}

/** function to delete one node containing a specific value**/
void list_delete_one_byValue(struct node** head, int value) {
  struct node** indirect = &(*head);

  // walk the list looking for the value
  while ((*indirect)->data != value && (*indirect) != NULL)
    indirect = &(*indirect)->next;
  // then just set it's pointer to the next location
  (*indirect) = (*indirect)->next;
}

/** the program entry point**/
int main() {
  struct node* head = new_Node(1);

  // add operations
  list_add_atEnd(head, 2);
  list_add_atEnd(head, 4);
  list_add_inAscendingOrder(head, 3);
  list_add_atPosition(head, 5, 2);
  list_add_atPosition(head, 8, 4);
  list_print(head);

  // delete operations
  list_delete_one_atEnd(head);
  list_print(head);

  list_delete_one_atPosition(head, 2);
  list_print(head);

  list_delete_one_byValue(&head, 1);
  list_print(head);

  return 0;
}
