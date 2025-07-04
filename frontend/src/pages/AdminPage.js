import React from 'react';

function AdminPage() {
  // TODO: Fetch and display metrics, pricing, and subscription management
  return (
    <div style={{ padding: 24 }}>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Metrics</h3>
        <p>Users: 0 | Questions: 0 | Revenue: 0 (placeholder)</p>
      </div>
      <div>
        <h3>Pricing</h3>
        <p>Pay-per-use: KES 5–10/question (placeholder)</p>
        <p>Subscription: Monthly plans (placeholder)</p>
      </div>
      <div>
        <h3>Subscriptions</h3>
        <p>Manage user subscriptions here (placeholder)</p>
      </div>
    </div>
  );
}

export default AdminPage; 