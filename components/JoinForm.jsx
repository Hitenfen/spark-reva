"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Team.module.css";

export default function JoinForm({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      // reset form when closed
      setName("");
      setEmail("");
      setRole("");
      setMessage("");
      setSubmitting(false);
      setSubmitted(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("Please provide name and email.");
      return;
    }
    setSubmitting(true);

    // TODO: replace with real API POST if needed
    try {
      // simulate network
      await new Promise((res) => setTimeout(res, 700));
      console.log("Join request:", { name, email, role, message });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitting(false);
        onClose();
      }, 900);
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Try again later.");
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Apply to join SPARK</h3>
          <button
            className={styles.modalClose}
            onClick={onClose}
            aria-label="Close form"
          >
            ×
          </button>
        </header>

        <div className={styles.modalBody}>
          {submitted ? (
            <div className={styles.modalThanks}>
              <h4>Thanks — we received your application!</h4>
              <p>We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.joinForm}>
              <label className={styles.formLabel}>
                Name
                <input
                  className={styles.formInput}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>

              <label className={styles.formLabel}>
                Email
                <input
                  type="email"
                  className={styles.formInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className={styles.formLabel}>
                Interested Role
                <input
                  className={styles.formInput}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Frontend, Design, Content"
                />
              </label>

              <label className={styles.formLabel}>
                Short note
                <textarea
                  className={styles.formTextarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </label>

              <div style={{ textAlign: "right" }}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
