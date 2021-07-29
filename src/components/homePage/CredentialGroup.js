import * as React from "React";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { CredentialCard } from "./CredentialCard";

export function CredentialGroup(props) {
  return (
    <div className="row align-items-center" style={{paddingTop: props.padding, paddingBottom: props.padding}}>
      <div className="col">
        <div className="row gy-3">
          <div className="col-6">
            <CredentialCard title="cGMP trained and fully qualified." text="Manufacturing Practice regulations enforced by the FDA" />
          </div>
          <div className="col-6">
            <CredentialCard title="ISO/IEC 17025:2017 Accredidation" text="Lab consistency." />
          </div>
          <div className="col-6">
            <CredentialCard title="NIST traceable" text="All Advanced Process Systems calibrations and validations are NIST traceable." />
          </div>
          <div className="col-6">
            <CredentialCard title="Certified System 4" text="Description" />
          </div>
        </div>
      </div>
    </div>
  );
}