module.exports.onRpcRequest = async ({ request }) => {
  // eslint-disable-next-line no-undef
  const ws = new WebSocket('ws://localhost:3000/');
  ws.addEventListener('message', (e) => {
    console.log(e.data);
    switch (request.method) {
      case 'inApp':
        wallet.request({
          method: 'snap_notify',
          params: [
            {
              type: 'inApp',
              message: `Hello!`,
            },
          ],
        });
        break;
      case 'native':
        wallet.request({
          method: 'snap_notify',
          params: [
            {
              type: 'native',
              message: `Hello!`,
            },
          ],
        });
        break;
      default:
        wallet.request({
          method: 'snap_notify',
          params: [
            {
              type: 'native',
              message: `Hello!`,
            },
          ],
        });
    }
  });

  return {};
};
