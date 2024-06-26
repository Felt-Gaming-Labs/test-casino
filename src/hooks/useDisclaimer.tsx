// hooks/useDisclaimer.tsx

import { useEffect, useState } from "react";

import { GambaUi } from "gamba-react-ui-v2";
import { Modal } from "@/components/ui/Modal";
import { useUserStore } from "./useUserStore";

export function useDisclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);

  const { agreedToTerms, set } = useUserStore();

  useEffect(() => {
    if (!agreedToTerms) {
      setShowDisclaimer(true);
    } else {
      setShowDisclaimer(false);
    }
  }, [agreedToTerms]);

  const handleDisclaimerClose = () => {
    set((state) => ({ ...state, agreedToTerms: true }));
    setShowDisclaimer(false);
  };

  const DisclaimerModal = () => {
    return (
      <Modal onClose={handleDisclaimerClose}>
        <div
          className="modal items-start text-left p-4 overflow-y-auto max-h-[60vh]"
          style={{ maxHeight: "400px" }}
        >
          <ol className="list-decimal list-inside space-y-4">
            <li className="text-lg">
              <span className="font-bold">1. Age Requirement:</span> Must be at
              least 18 years old.
            </li>
            <li className="text-lg">
              <span className="font-bold">2. Legal Compliance:</span> Follow
              local laws responsibly.
            </li>
            <li className="text-lg">
              <span className="font-bold">3. Risk Acknowledgement:</span> Games
              involve risk; no guaranteed winnings.
            </li>
            <li className="text-lg">
              <span className="font-bold">4. New Wallet Connect:</span> First bet
              with new wallets include a 0.01 connection fee.
            </li>
            <li className="text-lg">
              <span className="font-bold">5. Limitation of Liability:</span>{" "}
              We&apos;re not liable for damages.
            </li>
            <li className="text-lg">
              <span className="font-bold">6. Gaming Revenue Burn:</span> Felt
              Gaming Labs uses all casino revenue to burn the $GMCOCK token.
            </li>
            <li className="text-lg">
              <span className="font-bold">7. Fair Play:</span> Games are
              conducted fairly and transparently.
            </li>
            <li className="text-lg">
              <span className="font-bold">8. Data Privacy:</span> Your privacy
              is important to us.
            </li>
            <li className="text-lg">
              <span className="font-bold">9. Responsible Gaming:</span> Play
              responsibly; seek help with 1-800-GAMBLER.
            </li>
          </ol>
        </div>
        <p className="text-lg py-6">
          By playing on our platform, you confirm your compliance.
        </p>
        <GambaUi.Button main onClick={handleDisclaimerClose}>
          Acknowledge
        </GambaUi.Button>
      </Modal>
    );
  };

  return { showDisclaimer, DisclaimerModal };
}
