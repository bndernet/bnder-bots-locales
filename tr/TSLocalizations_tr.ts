import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_tr {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, task_text: string, guildName: string): string {
                return `Görev **${id}** için son teslim tarihi ${deadline} sunucuda **${guildName}**: ${task_text}`;
            },
            assigned_notification(guildName: string): string {
                return `Sunucuda **${guildName}** size bir görev atandı`;
            },
            assigned_embed_title(id: string): string {
                return `Görev ${id} atandı`;
            },
            assigned_embed_footer: "Bu bildirimler sunucu yöneticisi tarafından \"/preferences direct_messages\" komutu kullanılarak devre dışı bırakılabilir.",
            assigned_embed_button_in_progress: "Devam ediyor",
            assigned_embed_button_done: "Yapıldı",
            deadline_was_in_past(id: string, task_text: string, guildName: string): string {
                return `Görev **${id}** için son teslim tarihi sunucuda **${guildName}** geçmiş: ${task_text}`;
            },
            repeat_notification(guildName: string): string {
                return `Atandığınız bir görev tekrarlandı ve sunucuda **${guildName}** yapılması gerekiyor`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Görev ${id} tekrarlandı`;
            }
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Son teslim tarihi",
            assignees_field: "Atananlar",
            status_field: "Durum",
            delete_at_field: "Silinme tarihi",
            text_field: "Metin",
            project_field: "Proje",
            role_field: "Rol",
            permission_field: "İzin",
            user_field: "Kullanıcı",
            preset_field: "Ön ayar",
            priority_field: "Öncelik",
            label_field: "Etiket",
            personal_field: "Kişisel",
            manager_field: "Yönetici",
            repeat_interval_field: "Gün cinsinden tekrar aralığı",
            repeat_end_date_field: "Tekrar bitiş tarihi",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "Devam ediyor";
                    case 2:
                        return "Yapıldı";
                    default:
                        return "Bilinmiyor";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Görev ${id} için son teslim tarihi`;
                },
                description(id: string, deadline: string): string {
                    return `Görev **${id}** için son teslim tarihi ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Görev ${id} silindi.`;
                },
                description(id: string): string {
                    return `Görev ${id} çöpten silindi.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Görev ${id} tekrarlandı.`;
                },
                description(id: string): string {
                    return `Görev ${id} tekrarlandı ve durum todo olarak ayarlandı.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Görev ${id} oluşturuldu.`;
                },
                description(task_text: string, id: string): string {
                    return `Görev ${id} metinle oluşturuldu: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Görev ${id} güncellendi.`;
                },
                description(id: string): string {
                    return `Görev ${id} güncellendi ve aşağıdaki veriler değiştirildi.`;
                }
            },
            project_created: {
                title: "Proje oluşturuldu",
                description(projectName: string): string {
                    return `Proje ${projectName} oluşturuldu`;
                }
            },
            project_deleted: {
                title: "Proje silindi",
                description(projectName: string): string {
                    return `Proje ${projectName} silindi`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Görev ${id} durumu değişti`;
                }
            },
            permission_granted: {
                title: "İzin verildi",
            },
            permission_revoked: {
                title: "İzin geri alındı",
            },
            preset_applied: {
                title: "Ön ayar uygulandı",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Görev ${id} için son teslim tarihi geçmişti`;
                }
            },
            project_updated: {
                title: "Proje güncellendi",
                description(name: string): string {
                    return `Proje ${name} güncellendi`;
                }
            },
            test_message: {
                title: "Bu bir test mesajıdır",
                description: "Bu mesajı görüyorsanız, web kancası doğru çalışıyor ve günlüğe kayıt etme etkin."
            },
            comment_added: {
                title(id: string): string {
                    return `Yorum eklendi: ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Yorum silindi: ${id}`;
                }
            }
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, startTime: string): string {
                return `Yaklaşan etkinlik (${id}: ${name}) ${durationTillEventMinutes} dakika içinde ${guildName} sunucusunda başlayacak.`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `<@${inviterId}> sizi **${eventId}** etkinliğine davet etti: **${eventName}** (${start} - ${end})`;
                },
                accept_button: "Kabul et",
                deny_button: "Reddet"
            }
        }
    }
}