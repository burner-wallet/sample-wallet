<script src="app.js" defer></script>
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById('walletStatus').innerText = `Wallet Connected ✅: ${accounts[0]}`;
    } catch (error) {
      console.error('Wallet connection error:', error);
      alert('⚠️ Unable to connect wallet.');
    }
  } else {
    alert('🦊 Please install MetaMask or use a compatible wallet.');
  }
}
