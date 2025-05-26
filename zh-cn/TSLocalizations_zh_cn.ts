import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_zh_cn {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `任务 **${id}** ${taskTitle} 的截止日期为 ${deadline}，在服务器 [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `您已被分配到任务 **${id}** ${taskText}，在服务器 [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `任务 ${id} 已分配`;
            },
            assigned_embed_footer: "这些通知可以通过命令 \"/preferences direct_messages\" 禁用。",
            assigned_embed_button_in_progress: "标记为进行中",
            assigned_embed_button_done: "标记为完成",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `任务 **${id}** ${taskTitle} 的截止日期已过期，服务器 [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `任务 **${id}** ${taskTitle} 已被重复分配，您需要重新完成它，在服务器 [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `任务 ${id} 被重复分配`;
            },
            deadline_alert: "任务截止日期",
            commented_embed_title(id: string): string {
                return `任务 ${id} 添加了评论`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `在服务器 [${guildName}](https://discord.com/channels/${guildId}) 由 ${author} 添加了评论：${commentText}`;
            },
            comment_response_button: "回复评论",
            stop_followup_reminder_button: "停止后续提醒",
            extend_deadline_by_one_day_button: "延长截止日期 1 天",
            extend_deadline_by_two_days_button: "延长截止日期 2 天",
            extend_deadline_by_one_week_button: "延长截止日期 1 周",
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `您已被 <@${addedBy}> 添加为服务器 [${guildName}](https://discord.com/channels/${guildId}) 中任务 **${id}** ${taskText} 的观察者。当此任务发生任何变化时，您将收到通知。如果您想停止接收通知，请点击下方按钮。`;
            },
            watcher_added_notification_unsubscribe_button: "取消订阅",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `您在服务器 [${guildName}](https://discord.com/channels/${guildId}) 观看的任务 **${id}** ${taskTitle} 已更新：`;
            },
            watcher_notification_footer: "使用命令 \"/task unwatch\" 禁用此任务的通知",
            watcher_embed_title(id: string): string {
                return `任务 ${id} 更新`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `里程碑 **${milestoneName}** 在服务器 [${guildName}](https://discord.com/channels/${guildId}) 中少于 6 小时后到期，并且有任务需要完成。`;
            },
            status_todo: "待办",
            status_in_progress: "进行中",
            status_done: "已完成"
        },
        webhookLogging: {
            id_field: "ID",
            deadline_field: "截止日期",
            assignees_field: "受指派人",
            status_field: "状态",
            todos_field: "待办事项",
            delete_at_field: "删除时间",
            project_field: "项目",
            topic_field: "主题",
            text_field: "文本",
            role_field: "角色",
            permission_field: "权限",
            user_field: "用户",
            preset_field: "预设",
            priority_field: "优先级",
            label_field: "标签",
            personal_field: "个人",
            manager_field: "经理",
            repeat_interval_field: "重复间隔（天）",
            repeat_end_date_field: "重复结束日期",
            milestone_field: "里程碑",
            due_date_field: "到期日期",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "待办";
                    case 1:
                        return "进行中";
                    case 2:
                        return "已完成";
                    default:
                        return "未知";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `任务 ${id} 的截止日期`;
                },
                description(id: string, deadline: string): string {
                    return `任务 **${id}** 的截止日期是 ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `任务 ${id} 已删除。`;
                },
                description(id: string): string {
                    return `任务 ${id} 已删除。`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `任务 ${id} 被重复。`;
                },
                description(id: string): string {
                    return `任务 ${id} 已被重复，状态设置为待办。`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `任务 ${id} 已创建。`;
                },
                description(task_text: string, id: string): string {
                    return `任务 ${id} 已创建，文本为：${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `任务 ${id} 已更新。`;
                },
                description(id: string): string {
                    return `任务 ${id} 已更新，以下数据已更改。`;
                }
            },
            project_created: {
                title: "项目已创建",
                description(projectName: string): string {
                    return `项目 ${projectName} 已创建`;
                }
            },
            project_deleted: {
                title: "项目已删除",
                description(projectName: string): string {
                    return `项目 ${projectName} 已删除`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `任务 ${id} 状态已更改`;
                }
            },
            permission_granted: {
                title: "权限已授予",
            },
            permission_revoked: {
                title: "权限已撤销",
            },
            preset_applied: {
                title: "预设已应用",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `任务 ${id} 的截止日期已过期`;
                }
            },
            project_updated: {
                title: "项目已更新",
                description(name: string): string {
                    return `项目 ${name} 已更新`;
                }
            },
            test_message: {
                title: "这是测试消息",
                description: "如果您看到此消息，则表示Webhook工作正常，日志记录已启用。"
            },
            comment_added: {
                title(id: string): string {
                    return `任务 ${id} 添加了评论`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `任务 ${id} 的评论已删除`;
                }
            },
            topic_created: {
                title: "主题已创建",
                description(name: string): string {
                    return `主题 ${name} 已创建`;
                }
            },
            topic_updated: {
                title: "主题已更新",
                description(name: string): string {
                    return `主题 ${name} 已更新`;
                }
            },
            topic_deleted: {
                title: "主题已删除",
                description(name: string): string {
                    return `主题 ${name} 已删除`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `文档 ${id} 已创建`;
                },
                description(name: string): string {
                    return `文档 ${name} 已创建`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `文档 ${id} 已更新`;
                },
                description(name: string): string {
                    return `文档 ${name} 已更新`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `文档 ${id} 已删除`;
                },
                description(name: string): string {
                    return `文档 ${name} 已删除`;
                }
            },
            label_created: {
                title: "标签已创建",
                description(name: string): string {
                    return `标签 ${name} 已创建`;
                }
            },
            label_updated: {
                title: "标签已更新",
                description(name: string): string {
                    return `标签 ${name} 已更新`;
                }
            },
            label_deleted: {
                title: "标签已删除",
                description(name: string): string {
                    return `标签 ${name} 已删除`;
                }
            },
            attachments_field: "附件",
            milestone_created: {
                title: "里程碑已创建",
            },
            milestone_updated: {
                title: "里程碑已更新",
            },
            milestone_deleted: {
                title: "里程碑已删除",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `即将开始的活动（${id}）**${name}**将在 ${durationTillEventMinutes} 分钟后开始，时间为 ${startTime}，地点在 [${guildName}](https://discord.com/channels/${guildId})。`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `你已被 <@${inviterId}> 邀请参加活动 ${eventId}: **${eventName}**，开始时间为 ${start}，结束时间为 ${end}。\n-# 所有日期均根据 ${timezone} 时区计算。使用 \"/settings timezone\" 可更改整个服务器的时区，或使用 \"/preferences timezone\" 更改你个人的时区。`;
                },
                accept_button: "接受",
                deny_button: "拒绝"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> 更新了活动 ${eventId}: **${eventName}**，开始时间为 ${start}，结束时间为 ${end}。\n-# 所有日期均根据 ${timezone} 时区计算。使用 \"/settings timezone\" 可更改整个服务器的时区，或使用 \"/preferences timezone\" 更改你个人的时区。`
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `恭喜！您已在服务器 [${guildName}](<https://discord.com/channels/${guildId}>) 中被安排到专业席位。这意味着您现在可以使用 [专业功能](<https://bnder.net/pricing>)。尽情享受吧！`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `服务器 [${guildName}](https://discord.com/channels/${guildId}) 上的一个或多个专业席位付款失败。请[点击此处](${customerPortalLink}) 支付您的账单。否则，您将无法使用专业功能。如有任何疑问，请联系客服。`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `文件 **${fileName}** 已由 <@${userId}> 在服务器 [${guildName}](https://discord.com/channels/${guildId}) 与您共享。`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `文件夹 **${folderName}** 已由 <@${userId}> 在服务器 [${guildName}](https://discord.com/channels/${guildId}) 与您共享。`;
            }
        },
        self_data_download_ready: "您的数据已准备好下载。您可以在 [我们的应用](<https://bnder.net/app/>) 中下载。下载链接有效期为两周。"
    }
}