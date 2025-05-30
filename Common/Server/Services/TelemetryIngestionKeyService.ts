import CreateBy from "../Types/Database/CreateBy";
import { OnCreate } from "../Types/Database/Hooks";
import DatabaseService from "./DatabaseService";
import ObjectID from "../../Types/ObjectID";
import Model from "../../Models/DatabaseModels/TelemetryIngestionKey";
import CaptureSpan from "../Utils/Telemetry/CaptureSpan";

export class Service extends DatabaseService<Model> {
  public constructor() {
    super(Model);
  }

  @CaptureSpan()
  protected override async onBeforeCreate(
    createBy: CreateBy<Model>,
  ): Promise<OnCreate<Model>> {
    if (!createBy.data.secretKey) {
      createBy.data.secretKey = ObjectID.generate();
    }

    return { createBy, carryForward: null };
  }
}

export default new Service();
