import DoublyLinkedListNode from '../DoublyLinkedListNode';

describe('Singly Linked List Node', () => {
  it('Should get created with value', () => {
    const testNode = new DoublyLinkedListNode(5);
    expect(testNode.value).toBe(5);
    expect(testNode.next).toBeNull();
  });

  it('Should set value', () => {
    const testNode = new DoublyLinkedListNode(5);
    testNode.value = 10;
    expect(testNode.value).toBe(10);
  });

  it('Should set next', () => {
    const testNode = new DoublyLinkedListNode(5);
    const anotherTestNode = new DoublyLinkedListNode(10);
    testNode.next = anotherTestNode;
    expect(testNode.next.value).toBe(10);
  });

  it('Should set prev', () => {
    const testNode = new DoublyLinkedListNode(5);
    const anotherTestNode = new DoublyLinkedListNode(10);
    anotherTestNode.prev = testNode;
    expect(anotherTestNode.prev.value).toBe(5);
  });
});
