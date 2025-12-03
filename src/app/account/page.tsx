export default function AccountPage() {
  return (
    <div className="page-shell">
      <h1>Your Account</h1>
      <p>
        This is a demo account view. In a real store you would manage your
        profile, addresses, and payment methods here.
      </p>
      <div style={{ marginTop: "1rem", fontSize: ".9rem" }}>
        <p>
          <strong>Signed in as:</strong> demo-user@drift-enterprises.com
        </p>
        <p>
          <strong>Membership:</strong> DRIFT ENTERPRISES Prime (trial)
        </p>
      </div>
    </div>
  );
}


