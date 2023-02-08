import { Content } from './content';
import { Notification } from './notification';

describe('Notifications', () => {
  it('should be able to create a notifications', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
