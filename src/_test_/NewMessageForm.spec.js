import React from 'react'
import { render, fireEvent, cleanup, } from 'react-testing-library';
import NewMessageForm from '../components/NewMessageForm';

describe('<NewMessageForm />', () => {
  let getByTestId;
  afterEach(cleanup);

  describe('Click the send button', () => {
    let sendHandler;
    beforeEach(() => {
      sendHandler = jest.fn();
      ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));

      fireEvent.change(
        getByTestId('messageText'),
        {
          target: {
            value: 'New message'
          }
        }
      )

      fireEvent.click(getByTestId('sendButton'));
    });

    it('Clears the text field', () => {
      expect(getByTestId('messageText').value).toEqual('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith('New message');
    });
  });
});
