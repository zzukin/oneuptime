import logger from "../Utils/Logger";
import DomainCommon from "../../Types/Domain";
import { PromiseRejectErrorFunction } from "../../Types/FunctionTypes";
import dns from "dns";
import CaptureSpan from "../Utils/Telemetry/CaptureSpan";

export default class Domain extends DomainCommon {
  @CaptureSpan()
  public static verifyTxtRecord(
    domain: Domain | string,
    verificationText: string,
  ): Promise<boolean> {
    return new Promise(
      (
        resolve: (isVerfified: boolean) => void,
        reject: PromiseRejectErrorFunction,
      ) => {
        dns.resolveTxt(
          domain.toString(),
          (err: Error | null, data: Array<Array<string>>) => {
            if (err) {
              return reject(err);
            }

            logger.debug("Verify TXT Record");
            logger.debug("Domain " + domain.toString());
            logger.debug("Data: ");
            logger.debug(data);

            let isVerified: boolean = false;
            for (const item of data) {
              let txt: Array<string> | string = item;
              if (Array.isArray(txt)) {
                txt = (txt as Array<string>).join("");
              }

              if (txt === verificationText) {
                isVerified = true;
                break;
              }
            }

            resolve(isVerified);
          },
        );
      },
    );
  }
}
