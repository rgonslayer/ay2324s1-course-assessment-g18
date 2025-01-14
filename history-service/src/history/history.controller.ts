import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './create-history.dto';
import { UpdateHistoryDto } from './update-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  async addHistory(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.addHistory(createHistoryDto);
  }

  @Get()
  async getHistory() {
    return this.historyService.getHistory();
  }

  @Get(':userEmail')
  async getHistoryByUserId(@Param('userEmail') userEmail: string) {
    return this.historyService.getHistoryByUserEmail(userEmail);
  }

  @Delete(':userEmail')
  async deleteHistoryByUserId(@Param('userEmail') userEmail: string) {
    return this.historyService.deleteHistoryByUserEmail(userEmail);
  }

  @Put(':historyId')
  async updateHistoryById(
    @Param('historyId') historyId: string,
    @Body() updateHistoryDto: UpdateHistoryDto,
  ) {
    return this.historyService.updateHistoryById(historyId, updateHistoryDto);
  }
}
